<template>
    <h1>Test Component</h1>

    <button @click="a++">Increment A</button>
    <button @click="b++">Increment B</button>


    <p>A : {{a}}</p>
    <p>B : {{b}}</p>

    <p>age + A = {{AgeWithA}}</p>
    <p>age + B = {{AgeWithB}}</p>

</template>



<script>
export default {
    name: 'Test',
    data() {
        return {
            a: 0,
            b:0,
            age:20
        }
    },
    computed: {
        AgeWithA(){
            console.log("AgeWithA called")
            return this.age = this.a;
        },
        AgeWithB(){
            console.log("AgeWithB called")
            return this.age = this.b;
        }
    },
}
</script>


<style>
    
</style>