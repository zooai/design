Menu panel for nav actions, account switchers, and row actions.

```jsx
<DropdownMenu hover align="right" trigger={<Button pill>Try Zoo <Icon name="ChevronDown" /></Button>}>
  <DropdownMenuItem desc="Chat with frontier models" href="https://zoo.chat">Zoo Chat</DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem href="https://zoo.app">Zoo App</DropdownMenuItem>
</DropdownMenu>
```

Nav menus open on hover (`hover`); in-app menus open on click. Items support a small `desc` second line.
