Use the dialog component to present content in a smaller window that is displayed on top of the main application or site content.

### Simple Dialog Example

<!-- prettier-ignore-start -->
```jsx
import { useState } from "react";

const DialogExample = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const handleDismiss = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      <Dialog
        id='Example-Dialog'
        isOpen={isDialogOpen}
      >
        <DialogBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </DialogBody>
        <DialogControls>
          <Button key="ok" onClick={handleDismiss}>OK</Button>
        </DialogControls>
      </Dialog>
    </>
  );
};

<DialogExample />;
```
<!-- prettier-ignore-end -->

### React Documentation Dialog Examples

<!-- prettier-ignore-start -->

```jsx
import { useState } from "react";

const DialogExample = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDismiss = () => {
    setDialogOpen(false);
  };
  const openModal = (event, modalKey) => {
    setDialogOpen(modalKey);
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
      <Button onClick={event => openModal(event, "default-dialog")}>Default dialog</Button>
      <Dialog
        id='Default-Dialog'
        isOpen={dialogOpen === "default-dialog"}
        onDismiss={handleDismiss}
        title="Dialog title"
      >
        <DialogBody>
          <p>The default dialog appears near the middle of the screen. It does not darken the page behind it and does
            not close when the user clicks outside of it. You can use data attributes to configure the appearance and
            behavior of the dialog.</p>
        </DialogBody>
        <DialogControls>
          <Button>OK</Button>
          <Button onClick={handleDismiss} modifier="secondary">Cancel</Button>
        </DialogControls>
      </Dialog>

      <Button onClick={event => openModal(event, "modal-dialog")}>Modal dialog</Button>
      <Dialog
        isOpen={dialogOpen === "modal-dialog"}
        darkenPage={true}
        disablePageInteraction={true}
        onDismiss={handleDismiss}
        closeOnOutsideClickOrEscape={true}
        title="Dialog title"
      >
        <DialogBody>
          <p>This dialog darkens the background, disables interaction with the page behind it, and closes when the user
            clicks outside of it.</p>
        </DialogBody>
        <DialogControls>
          <Button>OK</Button>
          <Button onClick={handleDismiss} modifier="secondary">Cancel</Button>
        </DialogControls>
      </Dialog>

      <Button onClick={event => openModal(event, "confirmation-dialog")}>Confirmation dialog</Button>
      <Dialog
        isOpen={dialogOpen === "confirmation-dialog"}
        disablePageInteraction={true}
        onDismiss={handleDismiss}
        showCloseButton={false}
        darkenPage={true}
        closeOnOutsideClickOrEscape={true}
        title="Delete Files"
      >
        <DialogBody>
          <p>Are you sure you want <strong>delete your files</strong>? This action cannot be undone.</p>
        </DialogBody>
        <DialogControls>
          <Button variant="danger">Delete my files</Button>
          <Button onClick={handleDismiss} modifier="secondary">Cancel</Button>
        </DialogControls>
      </Dialog>

      <Button onClick={event => openModal(event, "dialog-with-form")}>Dialog with form</Button>
      <Dialog
        isOpen={dialogOpen === "dialog-with-form"}
        darkenPage={true}
        disablePageInteraction={true}
        onDismiss={handleDismiss}
        closeOnOutsideClickOrEscape={true}
        title="Dialog title"
      >
        <form>
          <DialogBody>
            <div className="m-bottom-sm">
              <label className="rvt-label" htmlFor="the-title">Title</label>
              <input className="rvt-text-input" type="text" id="the-title" />
            </div>
            <label className="rvt-label" htmlFor="description">Description</label>
            <textarea className="rvt-textarea" id="description"></textarea>
            <fieldset className="rvt-fieldset">
              <legend className="rvt-ts-20 rvt-m-bottom-sm"><strong>Select dropdown</strong> default</legend>
              <label className="rvt-label" htmlFor="select-demo">Select input:</label>
              <select className="rvt-select m-bottom-md" id="select-demo">
                <option value="">Option One</option>
                <option value="">Option Two</option>
                <option value="">Option Three</option>
                <option value="">Option Four</option>
              </select>
            </fieldset>
            <fieldset className="rvt-fieldset rvt-m-top-xl">
              <legend className="rvt-ts-20 rvt-text-bold">Category</legend>
              <ul className="rvt-list-inline">
                <li>
                  <div className="rvt-checkbox">
                    <input type="checkbox" name="checkbox-demo" id="checkbox-1" defaultChecked />
                    <label htmlFor="checkbox-1">Option one</label>
                  </div>
                </li>
                <li>
                  <div className="rvt-checkbox">
                    <input type="checkbox" name="checkbox-demo" id="checkbox-2" />
                    <label htmlFor="checkbox-2">Option two</label>
                  </div>
                </li>
                <li>
                  <div className="rvt-checkbox">
                    <input type="checkbox" name="checkbox-demo" id="checkbox-3" />
                    <label htmlFor="checkbox-3">Option three</label>
                  </div>
                </li>
              </ul>
            </fieldset>
          </DialogBody>
          <DialogControls>
            <Button type="submit">Submit</Button>
            <Button onClick={handleDismiss}>Cancel</Button>
          </DialogControls>
        </form>
      </Dialog>

      <Button onClick={event => openModal(event, "notification")}>Notification</Button>
      <Dialog
        isOpen={dialogOpen === "notification"}
        align="top-right"
        onDismiss={handleDismiss}
        title="New version available"
      >
        <DialogBody>
          <p className="rvt-m-all-none">A new version of this application is available. Refresh the page to apply the
            update.</p>
        </DialogBody>
      </Dialog>

      <Button onClick={event => openModal(event, "help-widget")}>Help widget</Button>
      <Dialog
        isOpen={dialogOpen === "help-widget"}
        align="bottom-right"
      >
        <DialogBody>
          <p className="rvt-m-all-none">Do you need help with your task? Support center technicians are available over
            chat to provide live assistance.</p>
        </DialogBody>
        <DialogControls>
          <Button>Chat</Button>
          <Button onClick={handleDismiss} modifier="secondary">No thanks</Button>
        </DialogControls>
      </Dialog>
    </>
  );
};

<DialogExample />;
```
<!-- prettier-ignore-end -->
