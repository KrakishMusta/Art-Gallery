<!-- <template>
  <div>
    <h1>{{ message }}</h1>
    <button type="button" @click="handleClick">Click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TestLint',
  setup() {
    const message = ref('Hello Vue!');

    // Ошибка TypeScript: number нельзя присвоить string
    message.value = 123;

    // ESLint: неиспользуемая переменная
    const unusedVar = 'I am not used';

    // ESLint: console.log не разрешён в airbnb конфиге
    console.log('Testing ESLint');

    // Prettier: нарушение форматирования (неправильные отступы, отсутствие точки с запятой)
    const add = (a: number, b: number) => {
      return a + b;
    };

    function handleClick() {
      message.value += '!';
      add(1, 2);
    }

    return {
      message,
      handleClick,
    };
  },
});
</script>

<style scoped>
div {
  color: red;
}
</style> -->
