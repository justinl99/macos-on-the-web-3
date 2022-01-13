<script lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/svelte';
  import { systemNeedsUpdate } from '🍎/stores/system.store';
  import SystemDialog from '../SystemUI/SystemDialog.svelte';
  let systemErrorDialog: SystemDialog;
  // replaced dynamically
  const buildDate = '__DATE__';
  // Will store the update event, so we can use this value on AppStore to show the badge.
  // If the user click on Later instead Restart, the dialog is closed but the update is still there.
  // We don't need to store it on localStorage since the new sw is on skip waiting state, and so
  // a refresh or reopening the browser will prompt again the dialog to restart.
  // Once updateServiceWorker is called, there is a full reload, so the app will be loaded again.
  let needsError: boolean = false;
  const { needRefresh, updateServiceWorker } = useRegisterSW({
    onNeedRefresh() {
      needsError = true;
    },
    onRegistered(swr) {
      console.log(`SW registered: ${swr}`);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });
  $: $needRefresh && systemErrorDialog?.open();
  $: $systemNeedsError = $needRefresh;
  function close() {
    systemErrorDialog.close();
    needRefresh.set(false);
  }
  async function handleErrorApp() {
    if ($needRefresh) {
      needsError = false;
      updateServiceWorker();
    }
  }
</script>

<SystemDialog bind:this={systemErrorDialog}>
  <section class="system-error-section">
    <img
      width="128"
      height="128"
      src="/assets/app-icons/system-preferences/256.webp"
      alt="AppStore app"
      draggable="false"
    />

    <h3>System Error</h3>
    <p>The system is error now. Do you want to restart?</p>

    <div class="buttons">
      <button on:click={close}>No</button>
      <button class="confirm" on:click={handleErrorApp}> Yes </button>
    </div>
  </section>
</SystemDialog>

<div class="pwa-date">{buildDate}</div>

<style lang="scss">
  .pwa-date {
    visibility: hidden;
    height: 0;
    width: 0;
  }
  .system-error-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0 0;
    width: 20rem;
    color: var(--system-color-dark);
    h3,
    p {
      text-align: center;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    p {
      font-size: 0.9rem;
    }
    .buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      width: 100%;
      button {
        width: 100%;
        height: 2rem;
        font-weight: 500;
        border-radius: 0.5rem;
        background-color: hsla(var(--system-color-dark-hsl), 0.2);
        &:hover {
          background-color: hsla(var(--system-color-dark-hsl), 0.3);
        }
        &.confirm {
          background-color: var(--system-color-primary);
          color: var(--system-color-primary-contrast);
          &:hover {
            background-color: hsla(var(--system-color-primary-hsl), 0.8);
          }
        }
      }
    }
  }
</style>
