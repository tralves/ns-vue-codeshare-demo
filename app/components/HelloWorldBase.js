export default {
  data() {
    return {
      surprise: false,
      title: 'Tap you!',
      count: 300,
    }
  },
  created() {
    setInterval(() => {
      this.count = this.count - 1
    }, 1000)
  },
}
