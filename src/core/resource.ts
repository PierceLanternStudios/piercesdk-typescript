// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Piercesdk4 } from '../client';

export abstract class APIResource {
  protected _client: Piercesdk4;

  constructor(client: Piercesdk4) {
    this._client = client;
  }
}
