export default function dateFormatter(createdAt) {
  const now = new Date();
  let timeAgo = 0;
  if (createdAt.endsWith("ago")) {
    const [value, unit] = createdAt.split(" ");
    if (unit.startsWith("sec")) {
      timeAgo = parseInt(value);
    } else if (unit.startsWith("min")) {
      timeAgo = parseInt(value) * 60;
    } else if (unit.startsWith("hour")) {
      timeAgo = parseInt(value) * 3600;
    } else if (unit.startsWith("day")) {
      timeAgo = parseInt(value) * 86400;
    } else if (unit.startsWith("week")) {
      timeAgo = parseInt(value) * 604800;
    } else if (unit.startsWith("month")) {
      timeAgo = parseInt(value) * 2592000;
    } else if (unit.startsWith("year")) {
      timeAgo = parseInt(value) * 31536000;
    }
    return new Date(now.getTime() - timeAgo * 1000);
  } else if (createdAt.endsWith("ago.")) {
    const [, value, unit] = createdAt.split(" ");
    if (unit.startsWith("second")) {
      timeAgo = parseInt(value);
    } else if (unit.startsWith("minute")) {
      timeAgo = parseInt(value) * 60;
    } else if (unit.startsWith("hour")) {
      timeAgo = parseInt(value) * 3600;
    } else if (unit.startsWith("day")) {
      timeAgo = parseInt(value) * 86400;
    } else if (unit.startsWith("week")) {
      timeAgo = parseInt(value) * 604800;
    } else if (unit.startsWith("month")) {
      timeAgo = parseInt(value) * 2592000;
    } else if (unit.startsWith("year")) {
      timeAgo = parseInt(value) * 31536000;
    }
    return new Date(now.getTime() - timeAgo * 1000);
  } else if (createdAt.endsWith("year ago")) {
    const year = parseInt(createdAt.split(" ")[0]);
    return new Date(year, 0, 1);
  } else if (createdAt.endsWith("years ago")) {
    const years = parseInt(createdAt.split(" ")[0]);
    return new Date(now.getFullYear() - years, 0, 1);
  } else if (createdAt.endsWith("day ago")) {
    return new Date(now.getTime() - 86400000);
  } else if (createdAt.endsWith("days ago")) {
    const days = parseInt(createdAt.split(" ")[0]);
    return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  } else if (createdAt.endsWith("week ago") || createdAt.endsWith("weeks ago")) {
    const weeks = parseInt(createdAt.split(" ")[0]);
    return new Date(now.getTime() - weeks * 7 * 24 * 60 * 60 * 1000);
  } else if (createdAt.endsWith("year ago") || createdAt.endsWith("years ago")) {
    const years = parseInt(createdAt.split(" ")[0]);
    const currentYear = now.getFullYear();
    return new Date(
      currentYear - years,
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    );
  }
}
