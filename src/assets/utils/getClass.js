const getClassForTag = (tag) => {
    switch (tag) {
      case 'html':
        return 'text-bg-success';
      case 'css':
        return 'text-bg-warning';
      case 'js':
        return 'text-bg-primary';
      default:
        return 'text-bg-danger';
    }
};

export {getClassForTag};

