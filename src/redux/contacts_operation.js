import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addContactRecuest,
  delContactRecuest,
  getContactRecuest,
} from "./actions";

export const getContact = createAsyncThunk(getContactRecuest, async () => {
  const contacts = await axios.get("/contacts").then((res) => res.data);
  return contacts;
});

export const addContact = createAsyncThunk(
  addContactRecuest,
  async (contact) => {
    const { name } = contact;
    const contacts = await axios.get("/contacts").then((res) => res.data);
    if (contacts.filter((item) => item.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      throw Error("Existing contact");
    }
    const addContacts = await axios
      .post("/contacts", contact)
      .then((res) => res.data);
    return addContacts;
  }
);

export const delContact = createAsyncThunk(delContactRecuest, async (id) => {
  await axios.delete(`/contacts/${id}`).then((res) => res.data.id);
  return id;
});
