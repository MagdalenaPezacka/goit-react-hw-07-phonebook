import { createSelector } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

// export const selectStatusFilter = state => state.filters.status;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectStatusFilter],
//   (contacts, statusFilter) => {
//     console.log("Calculating visible contacts");

//     switch (statusFilter) {
//       case statusFilters.active:
//         return contacts.filter(contact => !contact.completed);
//       case statusFilters.completed:
//         return contacts.filter(contact => contact.completed);
//       default:
//         return contacts;
//     }
//   }
// );



export const getFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
// export const selectTaskCount = createSelector([selectTasks], tasks => {
//   console.log("Calculating task count");

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// });
