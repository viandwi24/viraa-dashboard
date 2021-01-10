<template>
  <div class="dashboard">
    <!-- Overlays -->
    <div class="overlay">
      <div class="overlay-sidebar-left hidden" />
      <div class="overlay-sidebar-right hidden" />
      <div class="overlay-search hidden">
        <button class="close text-gray-200">
          <x-icon size="3x" class="icon" />
        </button>
        <form method="GET">
          <div class="search-box">
            <search-icon size="1.5x" class="icon" />
            <input type="text" class="input" placeholder="Search ...">
          </div>
        </form>
      </div>
    </div>

    <!-- Sidebar:Left -->
    <div class="sidebar left">
      <div class="brand">
        <a href="#">
          <img src="~/assets/images/logo.svg" class="inline-block mr-2" width="34px">
          Viraa
        </a>
      </div>
      <div class="scrollable">
        <div class="menu">
          <div class="item active">
            <a href="#">
              <home-icon size="1.2x" class="icon" />
              <span class="text">Dashboard</span>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <edit-icon size="1.2x" class="icon" />
              <span class="text">Posts</span>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <folder-icon size="1.2x" class="icon" />
              <span class="text">Storage</span>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <message-square-icon size="1.2x" class="icon" />
              <span class="text">Chat</span>
            </a>
          </div>
          <div class="item">
            <a href="#">
              <calendar-icon size="1.2x" class="icon" />
              <span class="text">Planning</span>
            </a>
          </div>
          <div v-for="i in 5" :key="i" class="item">
            <a href="#">
              <settings-icon size="1.2x" class="icon" />
              <span class="text">Setting</span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer px-6 pb-6">
        <div class="card bg-blue-100 p-4 rounded-xl">
          <div class="text-center mb-2" style="margin-top: -35px;">
            <img src="~/assets/images/icons/upgrade-premium.svg" alt="Upgrade!" class="inline-block">
          </div>
          <p class="text-sm text-center mb-4">
            Upgrade to <b>PRO</b> for more resources.
          </p>
          <a href="#" class="bg-blue-700 inline-block w-full py-2 rounded-xl text-gray-100 font-semibold text-center">
            Uppgrade
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="content container mx-auto px-4 lg:px-8">
      <!-- section header -->
      <div class="header">
        <div class="left flex">
          <button class="sidebar-left-toggle bg-gray-300 px-2 py-2 rounded-lg text-gray-700 font-semibold inline md:hidden mr-2">
            <align-left-icon size="1.2x" />
          </button>
          <h1>Dashboard</h1>
        </div>
        <div class="right">
          <span class="text-sm hidden md:block text-gray-500">Saturday, 9 Jan 2021</span>
          <div class="menu flex">
            <button class="search-toggle bg-blue-200 px-2 py-2 rounded-lg text-blue-700 font-semibold inline ml-2">
              <search-icon size="1.2x" />
            </button>
            <button class="sidebar-right-toggle bg-gray-300 px-2 py-2 rounded-lg text-gray-700 font-semibold inline sm:inline lg:hidden ml-2">
              <grid-icon size="1.2x" />
            </button>
          </div>
        </div>
      </div>

      <!-- section welcome card -->
      <div class="card mt-4 lg:mt-12 bg-red-100 block rounded-xl lg:py-8 lg:px-10 py-6 px-8">
        <div class="block lg:flex">
          <div class="text lg:w-6/12 w-full">
            <span class="font-bold text-xl text-pink-600">Welcome back Alfian!</span>
            <p class="pt-4 text-sm text-gray-800">
              You've learned 80% of your goal this week!<br>
              Keep it up and improve your results!
            </p>
          </div>
          <div class="illustration w-6/12 hidden lg:block">
            <img src="~/assets/images/illustrations/1.svg" class="w-full negative-illustration">
          </div>
        </div>
      </div>

      <!-- section post -->
      <div class="mt-6">
        <div class="font-semibold mb-4">
          Your posts
        </div>
        <div class="list block md:flex gap-3">
          <div class="item my-2 rounded-xl w-full md:w-1/3 flex bg-red-400">
            <div class="main p-4 self-center">
              <div class="px-4 py-2 rounded-xl bg-red-600 text-xl text-gray-100">
                10
              </div>
            </div>
            <div class="self-center w-full">
              <div class="text-sm text-gray-50">
                Published
              </div>
              <div class="font-semibold text-gray-50 pr-4">
                <a href="#" class="flex justify-between">
                  <span>Comments</span>
                  <arrow-right-icon size="1.2x" class="self-center" />
                </a>
              </div>
            </div>
          </div>
          <div class="item my-2 rounded-xl w-full md:w-1/3 flex bg-purple-400">
            <div class="main p-4 self-center">
              <div class="px-4 py-2 rounded-xl bg-purple-600 text-xl text-gray-100">
                4
              </div>
            </div>
            <div class="text self-center w-full">
              <div class="text-sm text-gray-50">
                Published
              </div>
              <div class="font-semibold text-gray-50 pr-4">
                <a href="#" class="flex justify-between">
                  <span>Comments</span>
                  <arrow-right-icon size="1.2x" class="self-center" />
                </a>
              </div>
            </div>
          </div>
          <div class="item my-2 rounded-xl w-full md:w-1/3 flex bg-blue-400">
            <div class="main p-4 self-center">
              <div class="px-4 py-2 rounded-xl bg-blue-600 text-xl text-gray-100">
                1
              </div>
            </div>
            <div class="text self-center w-full">
              <div class="text-sm text-gray-50">
                Drafted
              </div>
              <div class="font-semibold text-gray-50 pr-4">
                <a href="#" class="flex justify-between">
                  <span>Draft</span>
                  <arrow-right-icon size="1.2x" class="self-center" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar:Right -->
    <div class="sidebar right">
      <div class="flex flex-col h-full">
        <div class="container flex flex-col mx-auto px-6 pt-6">
          <div class="menu-logout">
            <a href="#" class="flex justify-between text-gray-800">
              <span class="font-semibold">Logout</span>
              <log-out-icon size="1.2x" />
            </a>
          </div>
          <div class="profile mt-8">
            <img src="~/assets/images/profile.svg" alt="Avatar" class="avatar" width="140px">
            <div class="font-semibold mt-4 text-gray-800">
              Alfian Dwi Nugraha
            </div>
            <div class="text-xs mt-1 text-gray-600">
              viandwicyber@gmail.com
            </div>
          </div>
        </div>
        <div class="mt-10 flex-1 flex flex-col">
          <div class="container flex justify-between mx-auto px-6 pt-6">
            <span class="font-semibold">Notifications</span>
            <bell-icon size="1.2x" class="text-gray-500" />
          </div>
          <div class="scrollable relative flex-1 mt-4">
            <div class="container mx-auto px-6 pb-4 pt-2 flex flex-col gap-3">
              <div class="item flex gap-3">
                <div style="width: 42px;height: 42px;" class="bg-red-100 text-red-500 rounded-lg px-3 py-3">
                  <alert-circle-icon size="1.2x" />
                </div>
                <div>
                  <div class="font-semibold text-sm text-gray-800">
                    Your plan started in free.
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    Friday, 8 Jan 2021
                  </div>
                </div>
              </div>
              <div class="item flex gap-3">
                <div style="width: 42px;height: 42px;" class="bg-blue-100 text-blue-500 rounded-lg px-3 py-3">
                  <mail-icon size="1.2x" />
                </div>
                <div>
                  <div class="font-semibold text-sm text-gray-800">
                    Receive new message.
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    Saturday, 9 Jan 2021
                  </div>
                </div>
              </div>
              <div v-for="i in 5" :key="i" class="item flex gap-3">
                <div style="width: 42px;height: 42px;" class="bg-blue-100 text-blue-500 rounded-lg px-3 py-3">
                  <eye-icon size="1.2x" />
                </div>
                <div>
                  <div class="font-semibold text-sm text-gray-800">
                    Newest post got 100 view.
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    Saturday, 9 Jan 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const {
  HomeIcon,
  EditIcon,
  SettingsIcon,
  FolderIcon,
  MessageSquareIcon,
  CalendarIcon,
  SearchIcon,
  LogOutIcon,
  BellIcon,
  AlertCircleIcon,
  MailIcon,
  EyeIcon,
  ArrowRightIcon,
  GridIcon,
  AlignLeftIcon,
  XIcon
} = require('vue-feather-icons')
const OverlayScrollbars = require('overlayscrollbars')
const dashboard = require('~/assets/scripts/dashboard')

export default Vue.extend({
  components: {
    HomeIcon,
    EditIcon,
    SettingsIcon,
    FolderIcon,
    MessageSquareIcon,
    CalendarIcon,
    SearchIcon,
    LogOutIcon,
    BellIcon,
    AlertCircleIcon,
    MailIcon,
    EyeIcon,
    ArrowRightIcon,
    GridIcon,
    AlignLeftIcon,
    XIcon
  },
  mounted () {
    // dashboard template init
    dashboard().init('.dashboard')

    // custom scripts
    const options = {
      className: 'os-theme-minimal-dark',
      sizeAutoCapable: true,
      scrollbars: {
        visibility: 'auto',
        autoHide: 'leave',
        clickScrolling: true
      }
    }
    OverlayScrollbars(document.querySelector('.dashboard .sidebar.right .scrollable'), options)
  }
})
</script>

<style lang="scss">
</style>
