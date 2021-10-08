import Vue from "vue";

export const notify = ({ type, msg  }) => {
    Vue.$toast.open({
        type,
        message: msg,
        duration: 5000,
        pauseOnHover: true
    })
}

export const generateNewId = () =>
`${Math.random()
  .toString(36)
  .replace(/[^a-z]+/g, "")
  .substr(0, 20)}_${Math.random() * 10}`;