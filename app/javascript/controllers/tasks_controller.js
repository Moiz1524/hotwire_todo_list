import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tasks"
export default class extends Controller {
  static targets = ["checkbox"]
  
  connect() {
  }

  toggle() {
    this.checkboxTarget.closest("form").requestSubmit()
  }
}
