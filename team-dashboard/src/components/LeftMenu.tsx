import { A } from '@solidjs/router';
import { AiOutlineUsergroupAdd } from 'solid-icons/ai';
import { BiSolidDashboard } from 'solid-icons/bi';

function LeftMenu() {
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <A
              href="/dashboard"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClass="underline"
            >
              <BiSolidDashboard />
              <span class="ml-3">Dashboard</span>
            </A>
          </li>
          <li>
            <A
              href="/team"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              activeClass="underline"
            >
              <AiOutlineUsergroupAdd />
              <span class="flex-1 ml-3 whitespace-nowrap">Team</span>
            </A>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default LeftMenu;
