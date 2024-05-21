export const fillProfileValuesToForm = (nameInput, jobInput, title, description) => {
  nameInput.value = title.textContent;
  jobInput.value = description.textContent;
};