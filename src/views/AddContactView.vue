<script>
export default {
    name: 'AddContactView',
    data() {
        return {
            formContact: {
                firstName: '',
                lastName: '',
                number: ''
            },
        }
    },
    methods: {
        addContact() {
            this.$store.state.contacts.push(this.formContact)
        }
    }
}
</script>
<template lang="">
    <div>
        <form @submit.prevent="addContact">

        <input type="text" placeholder="Name..." v-model="formContact.firstName">
        <input type="text" placeholder="Name..." v-model="formContact.lastName">
        <!-- <span class="error" v-if="formPerso.pseudo.length < 3 && this.error">Pseudo tro cour fdp</span> -->
        <input type="tel" placeholder="06" v-model="formContact.number">
        <button type="submit">Ajouter</button>
        </form>
    </div>
</template>
<style lang="">
    
</style>