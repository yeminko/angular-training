import { Injectable } from '@angular/core';

export interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  servers: Server[] = [
    {
      id: 1,
      name: 'Server-1',
      status: 'Online',
    },
    {
      id: 2,
      name: 'Server-2',
      status: 'Offline',
    },
    {
      id: 3,
      name: 'Server-3',
      status: 'Online',
    },
  ];

  constructor() {}

  getServer(id: number): Server {
    return this.servers.find((server) => server.id === id)!;
  }

  updateServer(serverData: Server) {
    this.servers = this.servers.map((server) => {
      if (server.id === serverData.id) {
        server = serverData;
      }
      return server;
    });
  }

  deleteServer(id: number) {
    this.servers = this.servers.filter((server) => server.id !== id);
  }
}
