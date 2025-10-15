// Using Record with keyof / existing object types
const statusCodes = {
  ok: 200,
  notFound: 404,
  internal: 500,
} as const;

type StatusKey = keyof typeof statusCodes;
type Messages = Record<StatusKey,string>;

const messages:Messages = {
    ok:'Success',
    notFound:'Resource Not Found',
    internal:'Server Error'
};

console.log('ok: ',messages.ok);
console.log('notFound: ',messages.notFound);
console.log('internal: ',messages.internal);