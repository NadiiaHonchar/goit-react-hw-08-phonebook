import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addContactRecuest,
  delContactRecuest,
  getContactRecuest,
} from "./actions";

export const getContact = createAsyncThunk(getContactRecuest, async () => {
  try {
    const contacts = await axios.get("/contacts");
    return contacts.data;
  } catch (error) {}
});

export const addContact = createAsyncThunk(
  addContactRecuest,
  async (contact) => {
    try {
      const { name } = contact;
      const contacts = await axios.get("/contacts");
      if (contacts.data.filter((item) => item.name === name).length > 0) {
        alert(`${name} is already in contacts`);
        throw Error("Existing contact");
      }
      const addContacts = await axios.post("/contacts", contact);
      return addContacts.data;
    } catch (error) {}
  }
);

export const delContact = createAsyncThunk(delContactRecuest, async (id) => {
  try {
    const contacts = await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {}
});
