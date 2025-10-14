// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Piercesdk } from '../client';

export abstract class APIResource {
  protected _client: Piercesdk;

  constructor(client: Piercesdk) {
    this._client = client;
  }
}
