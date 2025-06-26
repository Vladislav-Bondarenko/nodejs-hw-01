import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const updatedContacts = [...contacts, ...newContacts];

  await writeContacts(updatedContacts);
};

const [, , arg] = process.argv;
const count = Number(arg) || 5;

generateContacts(count)
  .then(() => console.log(`${count} contacts generated!`))
  .catch((e) => console.error('Error generating contacts:', e));
