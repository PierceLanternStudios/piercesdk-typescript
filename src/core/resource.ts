// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Piercesdk5 } from '../client';

export abstract class APIResource {
  protected _client: Piercesdk5;

  constructor(client: Piercesdk5) {
    this._client = client;
  }
}
