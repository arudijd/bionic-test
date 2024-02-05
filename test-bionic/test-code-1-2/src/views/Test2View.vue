<template>
  <div v-if="!data.isError" class="max-w-screen-xl mx-auto flex flex-col gap-3 py-10">
    <div class="grid grid-cols-2 gap-3 w-full">
      <CardJob v-for="i in data.dataJob" :key="i.id" :title="i.title" :id="i.id" @detail-job="chooseDetailJob"/>
    </div>
    <div v-if="Object.keys(data.selectedJob).length !== 0" class="bg-[#F0EDE5] rounded-md px-16 py-10">
      <h1 class="text-[#4B9741] font-bold text-3xl">
        {{ data.selectedJob.title }}
      </h1>
      <div class="flex flex-col gap-3 pt-3">
        <div v-html="data.selectedJob.description.txt" />
      </div>
      <div class="mt-20">
        <h1 class="font-semibold text-2xl">
          Send Your Job Application
        </h1>
        <Form @submit="postJobApplication">
          <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col py-3">
              <label for="Name">Your Name</label>
              <Field v-model="dataForm.name" name="Name" id="Name" type="text" rules="required" class="bg-[#F0EDE5] border-b border-gray-300 px-2 py-1" placeholder="Enter Your Name"/>
              <ErrorMessage name="Name" class="text-red-500 mt-2"/>
  
            </div>
            <div class="flex flex-col py-3">
              <label for="Mobile Number">Mobile Number</label>
              <Field v-model="dataForm.phone" name="Mobile Number" id="Mobile Number" type="text" rules="required" class="bg-[#F0EDE5] border-b border-gray-300 px-2 py-1" placeholder="Enter Your mobile number"/>
              <ErrorMessage name="Mobile Number" class="text-red-500 mt-2"/>
  
            </div>
            <div class="flex flex-col py-3">
              <label for="Email">Email Address</label>
              <Field v-model="dataForm.email" name="Email" id="Email" type="text" rules="required|email" class="bg-[#F0EDE5] border-b border-gray-300 px-2 py-1" placeholder="Enter Your email"/>
              <ErrorMessage name="Email" class="text-red-500 mt-2"/>
  
            </div>
            <div class="flex flex-col py-3">
              <label for="Message">Write your message here...</label>
              <Field v-model="dataForm.message" name="Message" id="Message" type="text" rules="required" class="bg-[#F0EDE5] border-b border-gray-300 px-2 py-1" placeholder="Write your message"/>
              <ErrorMessage name="Message" class="text-red-500 mt-2"/>
  
            </div>
            <div class="flex flex-col py-3">
              <label for="uploadFile">File</label>
              <label for="uploadFile" class="flex items-center justify-center bg-yellow-600 text-white rounded-md p-5 w-20 h-20 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8">
                  <path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
                </svg>
              </label>
              <input type="file" name="uploadFile" id="uploadFile" class="hidden" @change="uploadFile">
            </div>
            <button class="text-white bg-gray-400 px-5 py-2 h-fit w-fit col-start-1 rounded-md" type="submit">
              Send Message
            </button>
          </div>
        </Form>

      </div>
    </div>
  </div>
  <div v-else class="text-center">
      Oops, There is an error in our systems. Please refresh the page or Contact our teams!
    </div>
</template>

<script setup>
import CardJob from '@/components/CardJob.vue';
import axios from 'axios';
import { defineRule, Form, Field, ErrorMessage } from 'vee-validate';
import { email, required } from '@vee-validate/rules';
import { onMounted, reactive } from 'vue';

defineRule('required', required);
defineRule('email', email);

const data = reactive({
  dataJob: [],
  selectedJob: {},
  isError: false,
  isPending: false
});

const dataForm = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  file: null
})

onMounted(async () => {
  try {
    data.isPending = true;
    const res = await axios.get('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth');
    data.dataJob = res.data;
    data.isPending = false;
  } catch (error) {
    data.isError = true
    data.isPending = false;
    alert('Oops! Something went wrong')
  }
});

const chooseDetailJob = (id) => {
  data.selectedJob = data.dataJob.filter(el => el.id === id)[0];
  console.log(data.selectedJob);
}

const uploadFile = (e) => {
  dataForm.file = e.target.files[0]
}

const postJobApplication = async () => {
  try {
    data.isPending = true;
    const formData = new FormData();
    formData.append("displayName", dataForm.name);
    formData.append("subject", data.selectedJob.title);
    formData.append("email", dataForm.email);
    formData.append("phone", dataForm.phone);
    formData.append("message", dataForm.message);
    formData.append("ptJobApplyType", dataForm.file);
    formData.append("isActive", data.selectedJob.isActive);
    formData.append("ptJobPost", JSON.stringify({id: data.selectedJob}));
    
    await axios.post('https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth', formData);
    alert('Data has been sent successfully!');

    data.isPending = false;
  } catch (error) {
    data.isError = true
    data.isPending = false;
    alert('Oops! Something went wrong')
  }
  
}

</script>

