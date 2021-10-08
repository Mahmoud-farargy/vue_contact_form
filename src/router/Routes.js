import HomeForm from '../views/HomeForm.vue';
export const routes = [
    // Form route
    {
        path: '/',
        name: 'HomeForm',
        component: HomeForm,
        meta: {
            title: "Vue Contact form",
            description: "Submit your message to us"
        }
    },
]