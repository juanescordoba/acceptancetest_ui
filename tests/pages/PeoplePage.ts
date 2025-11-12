import { Page, expect } from "@playwright/test";
import { BasePage } from "../core/BasePage";
import { People } from "../models/entities/People";

export class PeoplePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Elementos UI
  inputId = () => this.page.getByPlaceholder("ID del personaje");
  peopleName = () => this.page.locator("[data-testid='people-name']");
  peopleHeight = () => this.page.locator("[data-testid='people-height']");
  peopleMass = () => this.page.locator("[data-testid='people-mass']");
  peopleHair = () => this.page.locator("[data-testid='people-hair']");
  peopleSkin = () => this.page.locator("[data-testid='people-skin']");
  peopleEye = () => this.page.locator("[data-testid='people-eye']");
  peopleBirth = () => this.page.locator("[data-testid='people-birth']");
  peopleGender = () => this.page.locator("[data-testid='people-gender']");
  peopleHomework = () => this.page.locator("[data-testid='people-homework']");
  vehicleList = () => this.page.locator("[data-testid='vehicle-list'] li");

  // Acciones
  async searchPeople(id: string) {
    await this.inputId().fill(id);
  }

  // Validaciones
  async expectPersonVisible(people:People) {
    await expect(this.peopleName()).toHaveText(people.name);
    await expect(this.peopleHeight()).toContainText(people.height);
    await expect(this.peopleMass()).toContainText(people.mass);
    await expect(this.peopleHair()).toContainText(people.hair);
    await expect(this.peopleSkin()).toContainText(people.skin);
    await expect(this.peopleEye()).toContainText(people.eye);
    await expect(this.peopleBirth()).toContainText(people.birth);
    await expect(this.peopleGender()).toContainText(people.gender);
    await expect(this.peopleHomework()).toContainText(people.homework);
  }

  async expectVehiclesVisible(vehicles: string[]) {
    for (const v of vehicles) {
      await expect(this.page.locator(`[data-testid='vehicle-list'] >> text=${v}`)).toBeVisible();
    }
  }
}
