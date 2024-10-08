import useNavigation from "../hooks/useNavigation";

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    const matchPath = (routePath, currentPath) => {
        const routeSegments = routePath.split('/').filter(Boolean);
        const currentSegments = currentPath.split('/').filter(Boolean);

        if (routeSegments.length !== currentSegments.length) return false;

        return routeSegments.every((segment, index) => {
            return segment.startsWith(':') || segment === currentSegments[index];
        });
    };

    if (matchPath(path, currentPath)) {
        return children;
    }

    return null;
}

export default Route;