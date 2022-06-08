const pendingCalls = {};

export async function sendCall (clientId) {
  return new Promise((resolve) => {
    pendingCalls[clientId] = resolve;
  });
}

export function resolveCall (clientId, body) {
  pendingCalls[clientId](body);
  delete pendingCalls[clientId];
}

export function isPending (clientId) {
  return clientId in pendingCalls;
}
