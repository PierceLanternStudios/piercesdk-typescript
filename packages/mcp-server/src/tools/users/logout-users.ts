// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'piercesdk2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Piercesdk5 from 'piercesdk2';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/logout',
  operationId: 'logoutUser',
};

export const tool: Tool = {
  name: 'logout_users',
  description: 'Logs out current logged in user session',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Piercesdk5, args: Record<string, unknown> | undefined) => {
  const response = await client.users.logout().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
