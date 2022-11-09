import scss from "./Button.module.scss"

export default function Button({onClick}) {
    return (
        <button
            className={scss.Button}
            type="button"
            onClick={()=> onClick()}
        >
            Load more
        </button>
    );
};
