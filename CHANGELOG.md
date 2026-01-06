# Changelog

## 2.0.0 (2026-01-06)

Full Changelog: [v1.0.0...v2.0.0](https://github.com/PierceLanternStudios/piercesdk-typescript/compare/v1.0.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** enabled code tool ([15091f0](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/15091f093d5350f61ce2d8c78558089f76ad947f))
* **api:** manual updates ([c3f7ac6](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/c3f7ac68767b610d78d473ec283471e1d21d465c))
* **mcp:** add detail field to docs search tool ([19c6d2a](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/19c6d2a99e69ce6bed4a045b29aef8ec847f2b32))
* **mcp:** enable optional code execution tool on http mcp servers ([e875ab9](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/e875ab9f76b77ad3b6206eaa5e79637e5f9e9459))
* **mcp:** handle code mode calls in the Stainless API ([f9d5923](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/f9d592385ca292ee16dd15b619cebe55dc70d7a3))
* **mcp:** return logs on code tool errors ([2e2be52](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/2e2be52c0d0872a847f8b4f9341b358a9e581d7c))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([a2c7c7b](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/a2c7c7bed06ac32b7c95ad0c4ce2b24da9697364))
* **mcpb:** pin @anthropic-ai/mcpb version ([e1a282d](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/e1a282d1b83368f756fd903061b23ad73f1326b3))
* **mcp:** correct code tool API endpoint ([64b1be8](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/64b1be87875ef1f7c7daa8eb1df765521e0d19c0))
* **mcp:** correct code tool api output types ([f511241](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/f51124142fa6ca5fe648b9758532086d5dd7996a))
* **mcp:** pass base url to code tool ([b62394c](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/b62394c2f6c02f346bac69956250744d2aa2dfd2))
* **mcp:** return correct lines on typescript errors ([e004cae](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/e004caeb87d47a85eed7d3d47c527708b1745a27))
* **mcp:** return tool execution error on api error ([cdc8f06](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/cdc8f0654031a61cfa09856a1460cd52e4d4b2da))
* **mcp:** return tool execution error on jq failure ([25d6453](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/25d645335b1f1d46f17f9696e8a11b189cb4a10b))


### Chores

* **client:** fix logger property type ([e98eb48](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/e98eb48ce3ef25d11c7f5e9f019c7bf09ce97053))
* **internal:** codegen related update ([50b5073](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/50b5073da9bc9912e898bd06bf1c555e8d6af2e7))
* **internal:** codegen related update ([1b2ca9f](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/1b2ca9f33ae280a3bedee33369ad8d7cbb00b748))
* **internal:** codegen related update ([8fb0a30](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/8fb0a30bdbb6fb8c1eafd22190a5f088121e9b39))
* **internal:** codegen related update ([52bb191](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/52bb19194ace7241d2fd24620b0451eb86b38680))
* **internal:** codegen related update ([2b8c989](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/2b8c989cd2922b41c39f61c2676cf0743d1513b2))
* **internal:** configure MCP Server hosting ([b6e1e5f](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/b6e1e5f54d2a6ec0561e25dc6bbda2057fabb698))
* **internal:** configure MCP Server hosting ([4141bc2](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/4141bc2441b83253aaa31bfad04bc814893e7e4f))
* **internal:** grammar fix (it's -&gt; its) ([d9f59d4](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/d9f59d4b6221b5563bbb4fd3a5503faa440d89a1))
* **internal:** unconfigure MCP Server hosting ([b74311b](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/b74311b83b7fdee5a52152f98d95a82c348bcf70))
* **internal:** unconfigure MCP Server hosting ([85155c1](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/85155c1b2b7f8f4d61d9fbd5fc61470259ccb898))
* **internal:** upgrade eslint ([4e20843](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/4e208434da2f311b0b5a1d0dee42fb57e725a6f4))
* mcp code tool explicit error message when missing a run function ([9b062db](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/9b062dbc4396b45103cfebe44cd485567b4d5b8c))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([c18aa0f](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/c18aa0ff21888ab197274d24cd1f1f127ca96543))
* **mcp:** add line numbers to code tool errors ([30256f7](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/30256f747ba4fb0e7eb60a12e4f45395ab0ace31))
* **mcp:** clarify http auth error ([e768f7a](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/e768f7a7c15bf00fe170f0632105fcacc32e9193))
* **mcp:** remove deprecated tool schemes ([b56421e](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/b56421eda65b8f8ca26b4af35b66af235e8ec945))
* **mcp:** update lockfile ([c836281](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/c836281d39d28576bcb1e15da809f5ad250ac3dc))
* **mcp:** upgrade jq-web ([9a3d5ad](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/9a3d5ada3d8afb8de2c749e6df0ffc973a13d89b))
* testing mcp codemode stuff ([0a0f85a](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/0a0f85ad5e3ade0f56c976ec97031699abdb5e9d))
* use latest @modelcontextprotocol/sdk ([d00292a](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/d00292ac4f27d3a52a9a1d11b0fba2bc84c91c26))
* use structured error when code execution tool errors ([acb4ca0](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/acb4ca0921c2c0ae75cee9ef4ddfc0be5d3939e4))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([0675883](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/0675883b554844ae3e1162aed542b01f84baee88))
* **mcp:** add a README link to add server to VS Code or Claude Code ([8f52d35](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/8f52d35fbf33f10a719729f30b2507206b8c668c))

## 1.0.0 (2025-10-28)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/PierceLanternStudios/piercesdk-typescript/compare/v0.0.1...v1.0.0)

### Features

* **api:** manual updates ([a1a8cff](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/a1a8cff8d7d8468df36e70d95747ebe39c2127b4))
* trying to cause a merge conflict ([b2863c2](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/b2863c2486c57efd400f0e44920c4b1e32978f63))


### Chores

* configure new SDK language ([02d3b98](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/02d3b98d3392eb59bf513b5bc70baa30d186c685))
* **internal:** configure MCP Server hosting ([3688f83](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/3688f83b9c7ee9f933c7335ac737b1d903f3a411))
* update SDK settings ([31b28ca](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/31b28ca15387b3f6a1edd09ca49476c84f24c5ee))
* update SDK settings ([7f0a8c5](https://github.com/PierceLanternStudios/piercesdk-typescript/commit/7f0a8c5c8c7b55ab5b5b9dcd180e0ba3ce11a34d))
