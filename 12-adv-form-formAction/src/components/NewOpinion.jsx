import { useActionState, use } from "react";

import {OpinionsContext} from '../store/opinions-context'
import Submit from "./Submit";

export function NewOpinion() {

  const {addOpinion} = use(OpinionsContext)

  async function shareOpinionAction(preState, formData) {
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = formData.get("userName");

    const errors = [];

    if (title.trim().length < 5) {
      errors.push("Title should be at least 5 character long.");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Body shoud be in between 10 - 300 character long.");
    }
    if (!userName.trim()) {
      errors.push("Enter a valid user name.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValue: {
          title,
          body,
          userName,
        },
      };
    }

    // backend code...
    await addOpinion({title, body, userName})
    return {
      errors: null,
    };
  }

  const [formState, formAction] = useActionState(shareOpinionAction, {
    errors: null,
  });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValue?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValue?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValue?.body}
          ></textarea>
        </p>
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}> {error} </li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
