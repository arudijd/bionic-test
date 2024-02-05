<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="content add-gap p-5">
    <div class="content">
      <div class="block">
        1
      </div>
      <div class="inner">
        <div class="block">
          2
        </div>
        <div class="block">
          3
        </div>
      </div>
      <div class="inner-grid">
        <div class="content block-span-3">
          <div class="block content">
            <div class="block-red" style="display: flex; justify-content: center; align-items: center; height: 150px;">
              4
            </div>
          </div>
          <div class="inner-row">
            <div class="block">
              5
            </div>
            <div class="block">
              6
            </div>
            <div class="block">
              7
            </div>
          </div>
        </div>
        <div class="block block-span-2">
          <div class="content-flex add-gap">
            <div class="block-red">
              8
            </div>
            <div class="block-red">
              9
            </div>
            <div class="block-red">
              10
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="block-relative">
        <div class="block-absolute" style="top: 0; left: 0; background-color: red; height: 100px; width: 150px;" />
        <div class="block-absolute" style="z-index: 10; top: 50px; left: 50px; background-color: white; height: 150px; width: 130px;" />
        <div class="block-absolute" style="z-index: 20; bottom: 0; left: 100px; background-color: red; height: 100px; width: 150px;" />
        <div class="block-absolute" style="z-index: 20; top: 0; right: -80px; background-color: red; height: 100px; width: 150px;" />
        <div class="block-absolute" style="z-index: 20; bottom: 0; right: -300px; background-color: red; height: 100px; width: 150px;" />
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (min-width: 768px) {
  .block {
    background-color: blue;
    flex-grow: 1;
    color: white;
    text-align: center;
    padding: 20px 30px;
    border: 5px solid black;
  }
  .block-relative {
    position: relative;
    width: 50%; 
    background-color: blue; 
    height: 250px; 
    border: 5px solid black;
    color: white;
    text-align: center;
  }
  
  .block-absolute {
    position: absolute;
  }
  .block-red {
    background-color: red;
    color: white;
    flex-grow: 1;
    text-align: center;
    padding: 20px 30px;
    border: 5px solid black;
  }
  
  .content {
    display: flex;
    flex-direction: column;
  }

  .content-flex {
    display: flex;
    flex-direction: column;
  }
  
  .content  > .inner {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .content  > .inner-row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  
  .content  > .inner-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  
  
  .inner-grid > .block-span-3 {
    grid-column: span 3 / span 3;
  }
  
  .inner-grid > .block-span-2 {
    grid-column: span 2 / span 2;
  }
  
  .add-gap {
    gap: 0.75rem;
  }
  
}
@media screen and (max-width: 768px) {
  .block {
    background-color: blue;
    flex-grow: 1;
    color: white;
    text-align: center;
    padding: 20px 30px;
    border: 5px solid black;
  }
  .block-relative {
    display: none;
    position: relative;
    width: 50%; 
    background-color: blue; 
    height: 250px; 
    border: 5px solid black;
    color: white;
    text-align: center;
  }
  
  .block-absolute {
    position: absolute;
  }
  .block-red {
    background-color: red;
    color: white;
    flex-grow: 1;
    text-align: center;
    padding: 20px 30px;
    border: 5px solid black;
  }
  
  .content {
    display: flex;
    flex-direction: column;
  }

  .content-flex {
    display: flex;
    flex-direction: row;
  }
  
  .content  > .inner {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .content  > .inner-row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  
  .content  > .inner-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  
  .inner-grid > .block-span-3 {
    grid-column: span 3 / span 3;
  }
  
  .inner-grid > .block-span-2 {
    grid-column: span 2 / span 2;
  }
  
  .add-gap {
    gap: 0.5rem;
  }
}


</style>

