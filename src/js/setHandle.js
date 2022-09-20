import onHandleClick from "./onHandleClick";

const setHandle = (e) => {
    let handle;

    if (e.target.matches(".handle")) {
      handle = e.target;
    } else {
      handle = e.target.closest(".handle");
    }
    if (handle != null) onHandleClick(handle);
}

export default setHandle