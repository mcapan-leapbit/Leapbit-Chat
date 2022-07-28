export default {
  props: ["full_name"],
  computed: {
    initials() {
      if (this.full_name) {
        let names = this.full_name.split(" ");
        let initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
          initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
      }
      return "";
    },
  },
};
