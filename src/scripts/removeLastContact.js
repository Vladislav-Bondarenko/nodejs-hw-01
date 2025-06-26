import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Контактов нет — удалять нечего!');
    return;
  }

  contacts.pop();
  await writeContacts(contacts);

  console.log('Последний контакт успешно удалён!');
};

removeLastContact();
