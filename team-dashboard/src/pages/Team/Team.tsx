import { For } from 'solid-js';
import { CheckBox } from '../../components/common/checkBox/CheckBox';
import { SettingsContextValue, useSettings } from '../../components/providers/SettingsProvider';
import { ITeamMate } from '../../models/Data';
import { GroupActions } from './GroupActions/GroupActions';
import { EditUserModal } from './Modal/EditUserModal';

function Team() {
  const { settings } = useSettings() as SettingsContextValue;

  const getTheader = () => {
    return (
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center"></div>
          </th>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3">
            Position
          </th>
          <th scope="col" class="px-6 py-3">
            UTC Timezone
          </th>
          <th scope="col" class="px-6 py-3">
            🍵/☕ Breaks
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
    );
  };

  const getRow = (people: ITeamMate) => {
    return (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <CheckBox id="checkbox" />
          </div>
        </td>
        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
          <div class="pl-3">
            <div class="text-base font-semibold">{people.name}</div>
            <div class="font-normal text-gray-500">{people.email}</div>
          </div>
        </th>
        <td class="px-6 py-4">{people.role}</td>
        <td class="px-6 py-4">{people.utcOffset}</td>
        <td class="px-6 py-4">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            2:35 - 3:35
          </span>
        </td>
        <td class="px-6 py-4">
          <a
            href="#"
            type="button"
            data-modal-target="editUserModal"
            data-modal-show="editUserModal"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit user
          </a>
        </td>
      </tr>
    );
  };
  return (
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
          <div>
            <GroupActions />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {getTheader()}
          <tbody>
            <For each={settings()}>{(people) => getRow(people)}</For>
          </tbody>
        </table>
        <EditUserModal />
      </div>
    </div>
  );
}

export default Team;
