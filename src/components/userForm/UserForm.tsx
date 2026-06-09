import { UseFormInput } from "../../hooks/UseFormInput";
import { Gender, type User } from "../../types/user/User";

import TextInput from "../textinput/TextInput";
import DateInput from "../dateInput/DateInput";
import SelectInput from "../selectInput/SelectInput";
import SubmitButton from "../submitButton/Submitbutton";

type UserFormProps = {
  user: User | undefined;
  onSubmit: (user: User) => void;
};

function UserForm({ user, onSubmit }: UserFormProps) {
  const userNameProps = UseFormInput(user?.name ?? "", true);
  const dobProps = UseFormInput(user?.dob ?? "", true);
  const genderProps = UseFormInput(user?.gender ?? "", true);
  const emailProps = UseFormInput(user?.email ?? "", true);
  const addressProps = UseFormInput(user?.address ?? "", true);
  const telephoneProps = UseFormInput(user?.phone ?? "", true);
  const websiteProps = UseFormInput(user?.web ?? "", true);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Männlich":
        return Gender.MALE;

      case "Weiblich":
        return Gender.FEMALE;

      case "Divers":
        return Gender.OTHER;

      default:
        return Gender.NONE;
    }
  }

  function isValidInputs(): boolean {
    const isUserNameValid = userNameProps.validateInput(userNameProps.value);
    const isDobValid = dobProps.validateInput(dobProps.value);
    console.log(genderProps.value);
    const isGenderValid = genderProps.validateInput(
      convertStringToGender(genderProps.value),
    );

    const isEmailValid = emailProps.validateInput(emailProps.value);
    const isAddressValid = addressProps.validateInput(addressProps.value);
    const isTelephoneValid = telephoneProps.validateInput(telephoneProps.value);
    const isWebsiteValid = websiteProps.validateInput(websiteProps.value);

    return (
      isUserNameValid &&
      isDobValid &&
      isGenderValid &&
      isEmailValid &&
      isAddressValid &&
      isTelephoneValid &&
      isWebsiteValid
    );
  }

  function handleSubmitUser() {
    if (isValidInputs()) {
      const submittedUser: User = {
        id: user?.id ?? Math.random(),
        name: userNameProps.value,
        dob: dobProps.value,
        gender: convertStringToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: telephoneProps.value,
        web: websiteProps.value,
        portraitId: 0,
      };

      onSubmit(submittedUser);
    } else {
      alert("Bitte Informationen ergänzen");
    }
  }

  return (
    <div className="input-form-container">
      <div className="input-container">
        <span className="input-title"> Username </span>
        <br />
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
          error={userNameProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title"> Geburtsdatum</span>
        <br />
        <DateInput
          value={dobProps.value}
          onChange={dobProps.handleInputChangeEvent}
          error={dobProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title"> Geschlecht </span>
        <br />
        <SelectInput
          value={genderProps.value}
          onChange={genderProps.handleInputChangeEvent}
          options={["", "Männlich", "Weiblich", "Divers"]}
          error={genderProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title"> Email Adresse</span>
        <br />
        <TextInput
          value={emailProps.value}
          onChange={emailProps.handleInputChangeEvent}
          error={emailProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title"> Post Adresse</span>
        <br />
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
          error={addressProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title"> Telefonnummer </span>
        <br />
        <TextInput
          value={telephoneProps.value}
          onChange={telephoneProps.handleInputChangeEvent}
          error={telephoneProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title"> Webseite </span>
        <br />
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
          error={websiteProps.error}
        />
      </div>
      <SubmitButton onClick={handleSubmitUser} />
    </div>
  );
}

export default UserForm;
