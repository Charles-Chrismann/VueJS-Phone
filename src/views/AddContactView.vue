<script>
import router from '@/router'
export default {
    name: 'AddContactView',
    data() {
        return {
            formContact: {
                profilePicture: null,
                firstName: '',
                lastName: '',
                number: ''
            },
        }
    },
    methods: {
        addContact() {
          
          this.$store.commit('addContact', this.formContact)
          router.push('/contacts')
        },
        showPreview(event){
          if(event.target.files.length > 0){
            var src = URL.createObjectURL(event.target.files[0]);
            // var preview = document.getElementById("file-ip-1-preview");
            // preview.src = src;
            // preview.style.display = "block";
            this.formContact.profilePicture = src
        }
}
    }
}
</script>
<template lang="">
    <div class="addContact">
      <form @submit.prevent="addContact">
        <div class="nav">
            <span class="cancel">
                <router-link to="/contacts">Cancel</router-link>
            </span>
            <h3>New Contact</h3>
            <input class="done" type="submit" value="Done">
        </div>
        
          
          <div class="pp">
            <img v-if="formContact.profilePicture" id="pp-preview" :src="formContact.profilePicture">
            <img v-else-if="formContact.firstName !== '' || formContact.lastName !== ''" id="pp-preview" :src="`https://ui-avatars.com/api/?background=242424&color=42D392&name=${formContact.firstName !== '' ? formContact.firstName[0] : ''}${formContact.lastName !== '' ? formContact.lastName[0] : ''}&size=256`">
            <div v-else>
              <p>add</p>
              <p>photo</p>
            </div>
            <label for="pp"></label>
            <input type="file" id="pp" accept="image/*" @change="showPreview($event);">
          </div>
          <div class="inputs">
            <input type="text" placeholder="Name..." v-model="formContact.firstName">
            <input type="text" placeholder="Name..." v-model="formContact.lastName">
            <input type="tel" placeholder="06" v-model="formContact.number">
          </div>

        </form>
    </div>
</template>
<style lang="scss" scoped>
  .addContact {
    background: #ecebf0;
    
    
    form {
      background: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      .nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 4%;
        .cancel {
          color: #0958fc;
        }
  
        .done {
          background: none;
          border: none;
          outline: none;
          color: #0958fc;
        }
      }
      .pp {
        position: relative;
        width: 30%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        overflow: hidden;
        border: solid 1px;
        margin: 10% 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        & > div {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        label {
          position: absolute;
          inset: 0;
        }

        input {
          display: none;
        }
      }

      .inputs {
        border-top: solid  1px #d7d7d7;
        border-bottom: solid  1px #d7d7d7;
        input {
          border: none;
          outline: none;
          padding-left: 5%;
          width: 95%;
          border-bottom: solid  1px #d7d7d7;

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
</style>