import { createWebHistory, createRouter } from "vue-router"
import Hello from "@/components/HelloWorld.vue"
import Emotion from "@/components/Emotion.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Hello
    },
    {
        path: "/emotion",
        name: "Emotion",
        component: Emotion
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;