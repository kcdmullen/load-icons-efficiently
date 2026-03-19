<script setup>
import { useSpeechRecognition } from './composables/useSpeechRecognition'

const { isListening, isSupported, stop, result, start, error } = useSpeechRecognition({
  lang: 'en-US',
  continuous: true,
  interimResults: true,
})


</script>

<template>
  <div id="app-wrapper">
    <div v-if="!isSupported">
      Your browser does not support SpeechRecognition API,
      <a href="https://caniuse.com/mdn-api_speechrecognition" target="_blank">more details</a>
    </div>
    <div v-else>
      <header>
        <h1> Speech Recognition </h1>
        <i class="header-icon fas fa-microphone-alt"></i>
      </header>
      <main>
        <div class="mic-buttons">
          <!-- To handle the controls -->
          <v-btn v-if="!isListening" @click="start" color="success" prepend-icon="mdi-content-save">
            Speak
          </v-btn>
          <v-btn v-if="isListening" class="orange" @click="stop" color="danger" prepend-icon="mdi-stop-circle">
            Stop
          </v-btn>
        </div>
        <h2> English Transcript </h2>
        <!-- Conditionals to handle errors -->
        <p v-if="error">{{ error }}</p>
        <div v-else>
          <textarea v-model="result" class="text-transcript" cols="30" rows="10">  </textarea>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
#app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
</style>
