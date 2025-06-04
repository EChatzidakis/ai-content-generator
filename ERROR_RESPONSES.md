Here’s the same set of **typical server errors for your controllers** in clean **Markdown format** — perfect for internal documentation or a README:

---

## 🚨 Typical Server Errors for API Controllers

### 400 – Bad Request

Client sent invalid or incomplete data (e.g., missing fields, invalid types).

```ts
return NextResponse.json({ error: 'Invalid request parameters' }, { status: 400 });
```

---

### 401 – Unauthorized

Authentication required or invalid credentials provided.

```ts
return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
```

---

### 403 – Forbidden

User is authenticated but lacks permission for the requested action.

```ts
return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
```

---

### 404 – Not Found

Requested resource (user, content, etc.) does not exist.

```ts
return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
```

---

### 409 – Conflict

Conflict in the request, such as duplicate records.

```ts
return NextResponse.json({ error: 'Conflict: Resource already exists' }, { status: 409 });
```

---

### 422 – Unprocessable Entity

Request data is syntactically correct but semantically invalid.

```ts
return NextResponse.json({ error: 'Unprocessable Entity' }, { status: 422 });
```

---

### 429 – Too Many Requests

Client has hit the rate limit or exceeded allowed usage.

```ts
return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
```

---

### 500 – Internal Server Error

Unexpected failure on the server side. Always log the error for debugging.

```ts
console.error('[InternalError]:', error);
return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
```

---

Would you like a central `errorResponse()` utility to abstract this into a cleaner API?
