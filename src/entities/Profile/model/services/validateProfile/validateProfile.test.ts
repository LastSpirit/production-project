import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfile } from "./validateProfile";
import { ValidateProfileError } from "../../types/profile";

const data = {
  username: "admin",
  age: 22,
  country: Country.Ukraine,
  lastname: "Dmitriy",
  first: "asd",
  city: "dsag",
  currency: Currency.USD,
};

describe("validateProfile", () => {
  test("success", async () => {
    const result = validateProfile(data);

    expect(result).toEqual([]);
  });

  test("without first and last name", async () => {
    const result = validateProfile({ ...data, first: "", lastname: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfile({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect country", async () => {
    const result = validateProfile({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("incorrect all", async () => {
    const result = validateProfile({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
