import { test } from "@playwright/test";
import { PeoplePage } from "../pages/peoplePage";
import { People } from "../models/entities/People";

test.describe("UI - Visualización de persona y vehículos", () => {
  const people: People = {
    id: 1,
    name: "Luke Skywalker",
    height: "172 cm",
    mass: "77 kg",
    hair: "blond",
    skin: "fair",
    eye: "blue",
    birth: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    vehicles: ["Snowspeeder", "Imperial Speeder Bike"],
  };

  test.beforeEach(async ({ page }) => {
    const peoplePage = new PeoplePage(page);
    await peoplePage.navigateTo("http://localhost:3000/");
  });

  test("Debe permitir buscar una persona e imprimir sus datos básicos", async ({ page }) => {
    const peoplePage = new PeoplePage(page);

    await peoplePage.searchPeople(people.id.toString());
    await peoplePage.expectPersonVisible(people);
  });

  test("Debe mostrar los vehículos asociados a la persona", async ({ page }) => {
    const peoplePage = new PeoplePage(page);

    await peoplePage.searchPeople(people.id.toString());
    await peoplePage.expectVehiclesVisible(people.vehicles);
  });
});
