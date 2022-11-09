import create from "zustand";

const initialPeopleState = [];

export const usePeopleStore = create((set) => ({
  people: initialPeopleState,
  addNewPerson: (person) =>
    set((state) => ({
      people: [
        {
          id: Math.round(Math.random() * 100),
          name: person.name,
          surname: person.surname,
        },
        ...state.people,
      ],
    })),
  removePerson: (id) =>
    set((state) => ({
      people: state.people.filter((person) => person.id !== id),
    })),
}));
