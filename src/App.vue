<script setup>
import { ref, reactive, watch } from 'vue';
import PrintList from './components/todos/listToDo.vue';
import AddToDo from './components/todos/addToDo.vue';
import editPanel from './components/todos/panelTodo.vue';
import { loadToDos, saveToDos } from './logic/saveLoadLogic.js';

const userData = reactive([]);
const currentToDo = ref(null);
const panel = ref('');

loadToDos(userData);
watch(userData, saveToDos, { deep: true });

watch(
  userData,
  () => {
    if (currentToDo.value && !userData.includes(currentToDo.value)) {
      currentToDo.value = null;
      panel.value = null;
    }
  },
  { deep: true },
);
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <!-- Top nav -->
    <header class="bg-white border-b shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
            HC
          </div>
          <div>
            <div class="text-lg font-semibold">HydraCor</div>
            <div class="text-xs text-slate-500">Simple, focused tasks</div>
          </div>
        </div>

        <nav class="hidden sm:flex gap-4 items-center text-sm text-slate-600">
          <a class="hover:text-slate-900">Home</a>
          <a class="hover:text-slate-900">My Tasks</a>
          <a class="hover:text-slate-900">About</a>
          <button class="ml-4 px-3 py-1 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">Sign in</button>
        </nav>
      </div>
    </header>

    <!-- App body -->
    <main class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 items-start">
      <!-- Sidebar -->
      <aside class="hidden lg:block">
        <div class="sticky top-6 space-y-4">
          <div class="bg-white p-4 rounded-xl shadow">
            <h3 class="text-sm font-semibold mb-2">Quick Actions</h3>
            <AddToDo :todos="userData" />
          </div>

          <div class="bg-white p-4 rounded-xl shadow">
            <h3 class="text-sm font-semibold mb-3">Filters</h3>
            <div class="flex flex-col gap-2 text-sm">
              <button class="text-left px-2 py-1 rounded hover:bg-slate-100">All</button>
              <button class="text-left px-2 py-1 rounded hover:bg-slate-100">Active</button>
              <button class="text-left px-2 py-1 rounded hover:bg-slate-100">Completed</button>
              <button class="text-left px-2 py-1 rounded hover:bg-slate-100">High Priority</button>
            </div>
          </div>

          <div class="bg-white p-4 rounded-xl shadow text-xs text-slate-500">
            Tip: Click a task to edit. Use the sign-in to save across devices.
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <section>
        <div class="bg-white rounded-2xl shadow p-6">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-2xl font-bold text-slate-800">My Tasks</h1>
            <div class="text-sm text-slate-500">You have <span class="font-medium">{{ userData.length }}</span> tasks</div>
          </div>

          <div class="space-y-4">
            <PrintList
              :todos="userData"
              :task="currentToDo"
              @select="currentToDo = $event"
              @panel="panel = $event"
            />
            <div v-if="!userData.length" class="text-center py-8 text-slate-500">
              No tasks yet — add your first task using the form.
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Edit modal (mobile & desktop centered modal) -->
    <teleport to="body">
      <div v-if="panel === 'edit' && currentToDo" class="fixed inset-0 z-40 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/40" @click="panel = null; currentToDo = null"></div>
        <div class="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 p-6 z-50">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Edit task</h2>
            <button class="text-slate-500 hover:text-slate-700" @click="panel = null; currentToDo = null">&times;</button>
          </div>

          <editPanel
            :panel="panel"
            :todos="userData"
            :task="currentToDo"
            @close="panel = null; currentToDo = null"
          />
        </div>
      </div>
    </teleport>
  </div>
</template>
