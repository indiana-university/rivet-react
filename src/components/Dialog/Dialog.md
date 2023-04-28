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

  return (
    <>
      <Button onClick={() => setDialogOpen("default-dialog")}>Default dialog</Button>
      <Dialog
        isOpen={dialogOpen === "default-dialog"}
        onDismiss={handleDismiss}
        title="Dialog title"
      >
        <DialogBody>
          <p>The default dialog appears near the middle of the screen. It does not darken the page behind it and does not close when the user clicks outside of it. You can use data attributes to configure the appearance and behavior of the dialog.</p>
        </DialogBody>
        <DialogControls>
          <Button>OK</Button>
          <Button onClick={handleDismiss} modifier="secondary">Cancel</Button>
        </DialogControls>
      </Dialog>

      <Button onClick={() => setDialogOpen("modal-dialog")}>Modal dialog</Button>
      <Dialog
        isOpen={dialogOpen === "modal-dialog"}
        darkenPage={true}
        disablePageInteraction={true}
        onDismiss={handleDismiss}
        modal={true}
        title="Dialog title"
      >
        <DialogBody>
          <p>This dialog darkens the background, disables interaction with the page behind it, and closes when the user clicks outside of it.</p>
        </DialogBody>
        <DialogControls>
          <Button>OK</Button>
          <Button onClick={handleDismiss} modifier="secondary">Cancel</Button>
        </DialogControls>
      </Dialog>

      <Button onClick={() => setDialogOpen("confirmation-dialog")}>Confirmation dialog</Button>
      <Dialog
        isOpen={dialogOpen === "confirmation-dialog"}
        disablePageInteraction={true}
        darkenPage={true}
        title="Delete Files"
      >
        <DialogBody>
          <p>Are you sure you want to delete your files? This action cannot be undone.</p>
        </DialogBody>
        <DialogControls>
          <Button variant="danger">Delete my files</Button>
          <Button onClick={handleDismiss} modifier="secondary">Cancel</Button>
        </DialogControls>
      </Dialog>
      
      <Button onClick={() => setDialogOpen("dialog-with-form")}>Dialog with form</Button>
      <Dialog
        isOpen={dialogOpen === "dialog-with-form"}
        darkenPage={true}
        disablePageInteraction={true}
        onDismiss={handleDismiss}
        modal={true}
        title="Dialog Title"
      >
        <form>
          <DialogBody>
            <div class="m-bottom-sm">
              <label class="rvt-label" for="the-title">Title</label>
              <input class="rvt-text-input" type="text" id="the-title"/>
            </div>
            <label class="rvt-label" for="description">Description</label>
            <textarea class="rvt-textarea" id="description"></textarea>
            <fieldset class="rvt-fieldset">
              <legend class="rvt-ts-20 rvt-m-bottom-sm"><strong>Select dropdown</strong> default</legend>
              <label class="rvt-label" for="select-demo">Select input:</label>
              <select class="rvt-select m-bottom-md" id="select-demo">
                <option value="">Option One</option>
                <option value="">Option Two</option>
                <option value="">Option Three</option>
                <option value="">Option Four</option>
              </select>
            </fieldset>
            <fieldset class="rvt-fieldset rvt-m-top-xl">
              <legend class="rvt-ts-20 rvt-text-bold">Category</legend>
              <ul class="rvt-list-inline">
                <li>
                  <div class="rvt-checkbox">
                    <input type="checkbox" name="checkbox-demo" id="checkbox-1" checked/>
                    <label for="checkbox-1">Option one</label>
                  </div>
                </li>
                <li>
                  <div class="rvt-checkbox">
                    <input type="checkbox" name="checkbox-demo" id="checkbox-2"/>
                    <label for="checkbox-2">Option two</label>
                  </div>
                </li>
                <li>
                  <div class="rvt-checkbox">
                    <input type="checkbox" name="checkbox-demo" id="checkbox-3"/>
                    <label for="checkbox-3">Option three</label>
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
      
      <Button onClick={() => setDialogOpen("notification")}>Notification</Button>
      <Dialog
        isOpen={dialogOpen === "notification"}
        align="top-right"
        onDismiss={handleDismiss}
        title="New version available"
      >
        <DialogBody>
          <p class="rvt-m-all-none">A new version of this application is available. Refresh the page to apply the update.</p>
        </DialogBody>
      </Dialog>
      
      <Button onClick={() => setDialogOpen("help-widget")}>Help widget</Button>
      <Dialog
        isOpen={dialogOpen === "help-widget"}
        align="bottom-right"
      >
        <DialogBody>
          <p class="rvt-m-all-none">Do you need help with your task? Support center technicians are available over chat to provide live assistance.</p>
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
