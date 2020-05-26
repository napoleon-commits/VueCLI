<template>
    <div>
        <div :class="[{active: isActive}]">
            Array Syntax
        </div>
        <div style="border: 1px solid black">
            With Components
            <MyComponent class="baz boo" :class="{active: isActive}"></MyComponent>
        </div>
        <div :style="styleObject">Binding Inline Styles</div>
        <div :style="[styleObject, overridingStyle]">Array Syntax</div>
    </div>
</template>

<script>

import MyComponent from './MyComponent'

export default {
    data(){
        return {
            isActive: true,
            error: null,
            activeClass: 'active',
            errorClass: 'text-danger',
            styleObject: {
                color: 'red',
                fontSize: '30px'
            },
            overridingStyle: {
                color: 'blue'
            }
        }
    },
    computed:{
        classObject: function(){
            return{
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fail'
            }
        }
    },
    components:{
        MyComponent
    }
}
</script>

<style>

</style>