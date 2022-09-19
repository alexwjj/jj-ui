import {
  FunctionalComponent as FC,
  computed,
  defineComponent,
  h,
  ref,
  onMounted,
  reactive,
} from "vue";

interface IProps {}

export default defineComponent({
  name: "TButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "mini",
    },
  },
  setup(props, { slots, emit }) {
    // return () => h("div", slots.default);
    return () => (
      <>
        <div class="t-button">{slots.default && slots.default()}</div>
      </>
    );
  },
});
