"use client";

import React, { useEffect, useState } from "react";

export interface ServerStatusResponse {
  status: "ok" | "error";
  message: string;
  timestamp: string;
  uptimeSeconds: number;
  nodeVersion: string;
  environment: string;
  platform: NodeJS.Platform;
}

const TestServer = () => {
  const [data, setData] = useState<ServerStatusResponse | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    data === null && getData();
  });

  const getData = async () => {
    const api = process.env.NEXT_PUBLIC_BACKEND_URL;

    const res = await fetch(`${api}/api/ping`);
    const data = await res.json();

    setData(data);
  };

  return data !== null ? (
    <div className="flex flex-col font-semibold text-xl my-8">
      <p>Answer from server render to check if it works: {data.message}</p>
      <div className="space-y-2 text-xl">
        <h1 className="text-xl">Статус сервера</h1>
        <p>🟢 {data.message}</p>
        <div className="flex">
          <p>Время: </p> {new Date(data.timestamp).toLocaleString()}
        </div>
        <div className="flex">
          <p>Uptime: </p> {Math.round(data.uptimeSeconds)} сек
        </div>
        <div className="flex">
          <p>Node.js: </p> {data.nodeVersion}
        </div>
        <div className="flex">
          <p>Платформа: </p> {data.platform}
        </div>
        <div className="flex">
          <p>Env: </p> {data.environment}
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TestServer;
