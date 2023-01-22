import { createRouter, createWebHashHistory } from 'vue-router'
import ClavierView from '@/views/ClavierView.vue'
import ContactView from '@/views/ContactView.vue'
import JournalView from '@/views/JournalView.vue'
import AddContactView from '@/views/AddContactView.vue'
import ContactSingleView from '@/views/ContactSingleView.vue'

const routes = [
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contacts',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/contacts/:id',
    name: 'contactSingle',
    component: ContactSingleView
  },
  {
    path: '/AddContact',
    name: 'AddContact',
    component: AddContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
