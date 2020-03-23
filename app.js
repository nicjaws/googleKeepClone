class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$noteTitle = document.querySelector('#note-title');
    this.$noteTitle = document.querySelector('#form-buttons');


    this.addEventListeners();

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
      this.handleFormClick(event);
    });
  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target);

    if (isFormClicked) {

    } else {

    }

    openForm() {
      this.$form.classList.add('form-opem');
    }
  }
}

new App()