import styles from "./Button.module.css";

function Button({ color, br, width, icon, text, border, bg, id, disabled }) {
  return (
    <div>
      <button
        disabled={disabled ? true : false}
        style={{
          color: color ? color : "white",
          fontSize: "20px",
          borderRadius: br ? br : "10px",
          border: border ? border : "2px solid black",
          //   outline: "none",
          backgroundColor: bg ? bg : "transparent",
          width: width ? width : "100px",
          padding: "10px",
        }}
      >
        <div className={styles.iconText}>
          <span>{icon}</span>
          {text}
        </div>

        {id}
      </button>
    </div>
  );
}

// function ItemModalHandler() {
//   return (
//     <div>
//       <ItemModal />
//     </div>
//   );
// }

export default Button;
